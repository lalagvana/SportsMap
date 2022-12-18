#!/usr/bin/env sh


# для бэка нужен ssl сертификат, поэтому пока опция url не работает
npx dtsgen \
#    --url "https://84.201.130.50/swagger/v1/swagger.json"
    --out src/client/shared/types/gen/types.d.ts \
    scripts/swagger.json