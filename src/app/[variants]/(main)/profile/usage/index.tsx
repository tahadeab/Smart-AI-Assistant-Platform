/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import Client from './Client';

const MobileProfileUsagePage = async () => {
  return <Client mobile={true} />;
};

const DesktopProfileUsagePage = async () => {
  return <Client mobile={false} />;
};

export { DesktopProfileUsagePage, MobileProfileUsagePage };
