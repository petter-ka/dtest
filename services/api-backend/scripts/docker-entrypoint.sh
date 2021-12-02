#!/bin/bash

# execute your component specific commands in the script - overwrite the file in the build process
#bash init.sh

# check if dev - mode is called
if [ "$1" = 'dev' ]; then
    DIR='/usr/src/app/'
    # check if source directory is empty
    if [ "$(ls -A $DIR)" ]; then
        cd $DIR && exec bash -c "npm run start:debug"
    else
        echo "Expecting the /app directory not to be empty - mount app source here!"
    fi
# run production code
else
    cd /usr/local/bin/ || return
    exec "$@"
fi
