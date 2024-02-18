module.exports = {
    entry: "./src/Modal.jsx",
    output: {
        path: "./dist",
        filename: "modal-component.js",
        libraryTarget: "umd",
        library: "ModalComponent"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};