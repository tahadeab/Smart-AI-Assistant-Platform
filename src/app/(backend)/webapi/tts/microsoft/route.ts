/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { MicrosoftSpeechPayload, MicrosoftSpeechTTS } from '@lobehub/tts';

import { createSpeechResponse } from '@/server/utils/createSpeechResponse';

export const POST = async (req: Request) => {
  const payload = (await req.json()) as MicrosoftSpeechPayload;

  return createSpeechResponse(() => MicrosoftSpeechTTS.createRequest({ payload }), {
    logTag: 'webapi/tts/microsoft',
    messages: {
      failure: 'Failed to synthesize speech',
      invalid: 'Unexpected payload from Microsoft speech API',
    },
  });
};
