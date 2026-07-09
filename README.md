# Mini Todo

Mini Todo la ung dung quan ly cong viec don gian duoc xay dung bang React, Vite, Redux Toolkit va Tailwind CSS. Ung dung ho tro them, danh dau hoan thanh, xoa, loc cong viec va luu du lieu tren trinh duyet bang `localStorage`.

## Tinh nang

- Them cong viec moi.
- Danh dau cong viec da hoan thanh/chua hoan thanh.
- Xoa tung cong viec.
- Xoa tat ca cong viec da hoan thanh.
- Loc danh sach theo `All`, `Active`, `Completed`.
- Hien thi tien do hoan thanh cong viec.
- Ho tro giao dien sang/toi va ghi nho lua chon theme.
- Luu danh sach todo vao `localStorage`.

## Cong nghe su dung

- React 19
- Vite
- Redux Toolkit
- React Redux
- Tailwind CSS
- ESLint

## Yeu cau

Can cai dat Node.js va npm truoc khi chay project.

## Cai dat

```bash
npm install
```

## Chay project

```bash
npm run dev
```

Sau do mo dia chi duoc Vite hien thi trong terminal, thuong la:

```text
http://localhost:5173
```

## Build production

```bash
npm run build
```

## Xem ban build

```bash
npm run preview
```

## Kiem tra lint

```bash
npm run lint
```

## Cau truc thu muc

```text
todo-app/
+-- public/
|   +-- favicon.svg
|   +-- icons.svg
+-- src/
|   +-- components/
|   |   +-- TodoFilter.jsx
|   |   +-- TodoInput.jsx
|   |   +-- TodoItem.jsx
|   |   +-- TodoList.jsx
|   +-- context/
|   |   +-- ThemeContext.jsx
|   +-- store/
|   |   +-- store.js
|   |   +-- todoSlice.js
|   +-- App.jsx
|   +-- index.css
|   +-- main.jsx
+-- index.html
+-- package.json
+-- vite.config.js
```

## Ghi chu phat trien

- State todo duoc quan ly trong `src/store/todoSlice.js`.
- Store Redux duoc cau hinh trong `src/store/store.js`.
- Theme sang/toi duoc quan ly trong `src/context/ThemeContext.jsx`.
- Du lieu todo va theme duoc luu trong `localStorage`, nen van con sau khi reload trang.
