export interface VersionInfo {
  version: string;
  notes: string;
  pub_date: string;
  platforms: {
    "windows-x86_64": {
      url: string;
    };
  };
  history: {
    version: string;
    date: string;
    notes: string;
  }[];
}

export async function fetchVersionInfo(): Promise<VersionInfo | null> {
  try {
    const response = await fetch('https://raw.githubusercontent.com/ZarScape/ZarPresence/refs/heads/master/updates.json');
    if (!response.ok) throw new Error('Failed to fetch version info');
    return await response.json();
  } catch (error) {
    console.error('Error fetching version:', error);
    return null;
  }
}
