# Stopwatch by SES

![Screenshot](/bin/0.1/screenshot.png?raw=true "Screenshot")

Download APK from `bin` directory

#### CREATE APK

    cd android
    ./gradlew assembleRelease
    mkdir bin/<version>
    mv android/app/build/outputs/apk/release/* bin/<version>
    
https://facebook.github.io/react-native/docs/signed-apk-android


#### RUN via EMULATOR
    
 * Launch android studio, click on mobile icon, launch nexus5 emulator, switch it on
 
 * launch
        
        react-native run-android
    
    