#!/bin/sh
ping 8.8.8.8 | while read pong
do echo "$(date +%F_%T) -- $pong"
done
