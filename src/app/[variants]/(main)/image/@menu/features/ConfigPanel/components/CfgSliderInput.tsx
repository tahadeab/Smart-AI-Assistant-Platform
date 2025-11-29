/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { SliderWithInput } from '@lobehub/ui';
import { memo } from 'react';

import { useGenerationConfigParam } from '@/store/image/slices/generationConfig/hooks';

const CfgSliderInput = memo(() => {
  const { value, setValue, min, max } = useGenerationConfigParam('cfg');
  return <SliderWithInput max={max} min={min} onChange={setValue} value={value} />;
});

export default CfgSliderInput;
