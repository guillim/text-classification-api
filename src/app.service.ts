import { SendDto } from './body-keyword.dto';
import { Injectable } from '@nestjs/common';
const { PredictionServiceClient } = require('@google-cloud/automl').v1;

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async predictKeyword(
    projectId = 'YOUR_PROJECT_ID',
    location = 'us-central1',
    modelId = 'YOUR_MODEL_ID',
    content = 'text to predict',
  ): Promise<SendDto[]> {
    const client = new PredictionServiceClient();
    const request = {
      name: client.modelPath(projectId, location, modelId),
      payload: {
        textSnippet: {
          content: content,
          mimeType: 'text/plain',
        },
      },
    };

    const [response] = await client.predict(request);
    if (response && response.payload && response.payload.length > 5) {
      return response.payload.slice(0, 5).map((obj) => {
        return {
          label: obj.displayName,
          score: obj.classification.score,
        };
      });
    } else {
      return [];
    }
  }
}
