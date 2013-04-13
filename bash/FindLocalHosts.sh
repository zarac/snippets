#!/bin/bash
# [HL-2010-07-28 13:40] Not tested..
# http://tips4linux.com/find-out-active-ips-in-a-linux-lan/

for ip in $(seq 1 254); do ping -c 1 192.168.1.$ip>/dev/null; [ $? -eq 0 ] && echo "192.168.1.$ip UP" || : ; done
