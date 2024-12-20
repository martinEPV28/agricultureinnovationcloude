 Nombre del proyecto proyect qualified-smile-445322-g8
subir la informacion desplegar 
gcloud functions deploy helloHttp --runtime nodejs20 --trigger-http --allow-unauthenticated --source=C:\Documentos\Curso\Cloud\agricultureinnovation
comando de ayuda help 
optional flags may be  --allow-unauthenticated | --binary-authorization |
                         --build-env-vars-file | --build-service-account |
                         --build-worker-pool | --clear-binary-authorization |
                         --clear-build-env-vars |
                         --clear-build-service-account |
                         --clear-build-worker-pool | --clear-docker-repository |
                         --clear-env-vars | --clear-kms-key | --clear-labels |
                         --clear-max-instances | --clear-min-instances |
                         --clear-secrets | --clear-vpc-connector |
                         --concurrency | --cpu | --docker-registry |
                         --docker-repository | --egress-settings |
                         --entry-point | --env-vars-file | --gen2 | --help |
                         --ignore-file | --ingress-settings | --kms-key |
                         --max-instances | --memory | --min-instances |
                         --region | --remove-build-env-vars |
                         --remove-env-vars | --remove-labels |
                         --remove-secrets | --retry | --run-service-account |
                         --runtime | --runtime-update-policy |
                         --security-level |
                         --serve-all-traffic-latest-revision |
                         --service-account | --set-build-env-vars |
                         --set-env-vars | --set-secrets | --source |
                         --stage-bucket | --timeout | --trigger-bucket |
                         --trigger-event | --trigger-event-filters |
                         --trigger-event-filters-path-pattern | --trigger-http |
                         --trigger-location | --trigger-resource |
                         --trigger-service-account | --trigger-topic |
                         --update-build-env-vars | --update-env-vars |
                         --update-labels | --update-secrets | --vpc-connector
npx functions-framework --target=helloHttp --port 8081

npm install --save-dev @google-cloud/functions-framework