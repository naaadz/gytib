<template>
  <div class="flex flex-col gap-6 items-start">
    <h1>Universal Rendering</h1>
    <h2>Deploy a site with ssr</h2>
    <ul>
      <li>Build time: “yarn build” creates server and client js folders</li>
      <li>Server side request: nuxt will use the server js files to build (with data) static markup, and then the client js files to “hydrate” that html, create the vue app</li>
      <li>Client side reqest (app navigation): When a nuxt-link is clicked, Nuxt fetches the corresponding page component from the client-side bundle and works just like a SPA</li>
      <li>The Vue component is then rendered into the existing DOM structure, ensuring a seamless transition from the previous page.</li>
      <li>Seo can still crawl the site by loading each page individually</li>
      <li>Diff between this and ssg? All markup (and fetched data) is rendered into static files</li>
    </ul>
  </div>
</template>