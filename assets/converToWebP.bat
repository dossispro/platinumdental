@echo off
for /r "C:\Users\dossi\Downloads\assets" %%f in (*) do (
    if /i "%%~xf" NEQ ".webp" (
        cwebp -q 80 "%%f" -o "%%~dpnf.webp"
    )
)