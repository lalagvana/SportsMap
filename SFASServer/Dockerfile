FROM mcr.microsoft.com/dotnet/sdk:6.0 as builder

WORKDIR /app

COPY . ./

WORKDIR ./SFASAPI

EXPOSE 443

RUN dotnet build
CMD ["dotnet", "run"]