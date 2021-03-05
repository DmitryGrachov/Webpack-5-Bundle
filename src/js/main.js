function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(
    require.context(
        '../components',
        true,
        /\.(css|scss|jpg|png|svg|png|ico|xml|mp4|js)$/
    )
);

importAll(
    require.context(
        '../pages',
        true,
        /\.(css|scss|jpg|png|svg|png|ico|xml|mp4|js)$/
    )
);

importAll(require.context('../img', true, /\.(jpg|png|svg)$/));
importAll(require.context('./', true, /\.(js)$/));
importAll(require.context('../sass', true, /\.(css|scss)$/));
