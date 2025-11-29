/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
export const parseGreetingTime = () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 4 && hours < 11) {
    return 'morning';
  } else if (hours >= 11 && hours < 14) {
    return 'noon';
  } else if (hours >= 14 && hours < 18) {
    return 'afternoon';
  } else {
    return 'night';
  }
};
