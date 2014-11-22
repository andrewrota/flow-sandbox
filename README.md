## Flow Sandbox

Sandbox repository for testing static type checking in JavaScript with Facebook's [Flow](http://flowtype.org/).

## Install Flow and JSX Tools

    wget http://flowtype.org/downloads/flow-linux64-latest.zip
    unzip flow-linux64-latest.zip
    cd flow
    echo "PATH=\"\$PATH:$(pwd)/\"" >> ~/.bashrc && source ~/.bashrc

    npm install -g react-tools

## Run

To compile files on the fly:

    jsx --strip-types --harmony --watch src/ dist/

To run static type checks:

    flow check

