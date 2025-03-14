export async function getProjectsDataFromSheet() {
  try {
    const URL = `https://script.google.com/macros/s/AKfycbwMd22kn58JkaVng_t2Fzv2-PUDk5z05jb5TC9dk8DyROOlJqO5ABtmIaCikplSZJA/exec`;
    const ONE_DAY = 60 * 60 * 24;
    const response = await fetch(URL, {
      next: {
        revalidate: ONE_DAY,
        tags: ['projects']
      },
      cache: 'force-cache'
    });

    if (response.status !== 200) {
      throw new Error('Failed to fetch data from Google Sheets');
    }

    return response.json();
  } catch (error) {
    console.error('Failed to fetch data from Google Sheets', error);
    return null;
  }
}
