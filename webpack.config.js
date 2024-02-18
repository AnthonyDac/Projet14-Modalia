module.exports = {
    mode: "production",
    entry: "./src/Modal.jsx",
    output: {
        path: "C:/Users/Tony/Desktop/save formation/Projet-14-Librairie//dist",
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
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
};