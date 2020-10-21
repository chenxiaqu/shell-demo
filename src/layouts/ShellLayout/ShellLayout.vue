<template>
    <div class="shell-Layout">
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main>
            <solt name="main"></solt>
        </main>
    </div>
</template>
<script src="./ShellLayout.ts" lang="ts"></script>
<style lang="scss">
    .shell-Layout {
        width: 100vw;
        height: 100vh;
        .header {
            height: 64px;
            background-color: #fff;
            box-shadow: 0 0 10px 0 rgba(0,0,0,.08);
        }
        .main {
            height: calc(100vh - 64px);
        }
    }
</style>