FROM mcr.microsoft.com/dotnet/sdk:6.0 as builder

WORKDIR /app

COPY . ./

WORKDIR ./SFASAPI

EXPOSE 6001
EXPOSE 6002

RUN dotnet build
RUN dotnet dev-certs https -t
CMD ["dotnet", "run"]