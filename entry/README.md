# entry

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
### Custom inputs

Images are converted to webp https://caniuse.com/#search=webp
`cwebp -q 80 Baltic_blooms.jpg -o Baltic_blooms.webp`

remove audio from mp4
`ffmpeg -i Earth_From_Space.mp4 -vcodec copy -an Earth_From_Space_noaudio.mp4`

mp4 -> webp
`ffmpeg -i Earth_From_Space_noaudio.mp4  -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis Earth_From_Space.webm`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
