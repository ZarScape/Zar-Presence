import { useState, useEffect } from 'react';
import { fetchVersionInfo, type VersionInfo } from '../utils/version';

export function useVersion() {
  const [data, setData] = useState<VersionInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVersionInfo().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
