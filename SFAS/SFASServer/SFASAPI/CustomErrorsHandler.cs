using Microsoft.AspNetCore.Diagnostics;
using SFAS.Common.Models;
using System.Text.Json;

namespace SFAS.API
{
    public class ErrorHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ErrorHandlingMiddleware> _logger;

        public ErrorHandlingMiddleware(RequestDelegate next, ILogger<ErrorHandlingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context, IHostEnvironment environment)
        {
            if (environment.IsDevelopment())
            {
                await WriteDevelopmentResponse(context);
            }
            else
            {
                await WriteProductionResponse(context);
            }
        }

        private Task WriteDevelopmentResponse(HttpContext httpContext)
            =>
                WriteResponse(httpContext, includeDetails: true);

        private Task WriteProductionResponse(HttpContext httpContext)
            =>
                WriteResponse(httpContext, includeDetails: false);

        private async Task WriteResponse(HttpContext httpContext, bool includeDetails)
        {
            // Try and retrieve the error from the ExceptionHandler middleware
            var exceptionDetails = httpContext.Features.Get<IExceptionHandlerFeature>();

            if (exceptionDetails?.Error is BaseException ex)
            {
                _logger.LogError(ex, ex.LoggedMessage);
                // ProblemDetails has it's own content type
                httpContext.Response.ContentType = "application/problem+json";

                // Get the details to display, depending on whether we want to expose the raw exception
                var details = includeDetails ? ex.ToString() : null;

                var problem = new
                {
                    status = (int)ex.Code,
                    message = ex.Message,
                    details
                };
                httpContext.Response.StatusCode = (int)ex.Code;

                //Serialize the problem details object to the Response as JSON (using System.Text.Json)
                var stream = httpContext.Response.Body;
                await JsonSerializer.SerializeAsync(stream, problem);
            }
            else
            {
                _logger.LogError(exceptionDetails?.Error, "Unhandled exception");
                var stream = httpContext.Response.Body;
                await JsonSerializer.SerializeAsync(stream, exceptionDetails?.Error.Message);
            }
        }
    }
    // https://andrewlock.net/creating-a-custom-error-handler-middleware-function/
    public static class CustomErrorsHandler
    {
        public static void UseCustomErrors(this IApplicationBuilder app, IHostEnvironment environment)
        {
            app.UseMiddleware<ErrorHandlingMiddleware>();
        }
    }
}
