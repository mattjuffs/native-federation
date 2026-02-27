# native-federation
Angular Native Federation proof-of-concept

---

## To run

Open a new Terminal and enter the following commands:

```
cd Remote01
ng serve
```

That will start `Remote01` on port `4201`.

Then repeat for `Remote02`:

Open another Terminal:

```
cd Remote02
ng serve
```

Finally, one more Terminal:

```
cd Host
ng serve
```

And you should see the navigation, linking through to Remote01/Remote02 and the Host itself (`HomeComponent`):

![Screenshot](Screenshot_2026-02-27_154953.png)