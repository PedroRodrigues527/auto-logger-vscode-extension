#!/bin/bash

token=$1

# Install expect if not already installed
if ! command -v expect >/dev/null; then
    sudo apt-get install -y expect
fi

expect_script=$(mktemp)

/usr/bin/expect <<EOD
spawn vsce login pedrorodrigues
expect "Token for publisher"
send -- "$token\r"
expect eof
EOD

vsce package
vsce publish

chmod +x "$expect_script"

$expect_script

rm "$expect_script"