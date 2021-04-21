# learn-gasy


# install

    ```bash
    yarn install
    ```



# run

Update stories availabe for storybook and run react-native start

```bash
yarn start
```

in separate terminal

```bash
yarn android
```

or 

```bash
yarn ios
```

# use storybook

Enter dev menu on phone crtl + m (for android) select toggle storybook


# problems

if you get 

```bash
Error: spawn ./gradlew EACCES
 ```

while running `yarn android`

try

```
chmod 755 android/gradlew 
```
