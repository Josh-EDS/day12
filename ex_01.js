async function display_weather_image(longitude, latitude) {
    const open = (await import('open')).default;
    const url = `https://www.7timer.info/bin/civil.php?lon=${longitude}&lat=${latitude}&unit=metric`;
    await open(url);
}

display_weather_image(2.333333, 48.866667);
