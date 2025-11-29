/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Monitoring } from 'react-scan/monitoring/next';

interface ReactScanProps {
  apiKey: string;
}

const ReactScan = ({ apiKey }: ReactScanProps) => (
  <Monitoring apiKey={apiKey} url="https://monitoring.react-scan.com/api/v1/ingest" />
);

export default ReactScan;
