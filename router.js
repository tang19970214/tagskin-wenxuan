import path from "path";

export default [
  {
    name: "index",
    path: "/",
    component: path.resolve(__dirname, "pages/index.vue")
  },
  {
    name: "product",
    path: "/product",
    component: path.resolve(__dirname, "pages/product.vue")
  },
  {
    name: "terms",
    path: "/terms",
    component: path.resolve(__dirname, "pages/terms.vue")
  },
  {
    name: "policy",
    path: "/policy",
    component: path.resolve(__dirname, "pages/policy.vue")
  },
  {
    name: "about",
    path: "/about",
    component: path.resolve(__dirname, "pages/about.vue")
  },
];