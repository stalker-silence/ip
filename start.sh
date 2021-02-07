#!/bin/bash

cd /home/pi/mylab/ip
npm build

echo `date +"%Y-%m-%d %H:%M:%S"` begin >> ./start.log
