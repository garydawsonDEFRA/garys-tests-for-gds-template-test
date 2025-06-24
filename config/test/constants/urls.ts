export const urls = {
    base: 'http://localhost:3000',
    input: '/input-page',
    radio: '/radio-page',
    checkbox: '/checkbox-page',
    summary: '/summary-page',
    submit: '/submit',
};

export const getFullUrl = (path: keyof typeof urls): string => {
    if (path === 'base') return urls.base;
    return `${urls.base}${urls[path]}`;
};