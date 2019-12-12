<template>
  <header class="header">
   あああs

  </header>
</template>

<!-- style中身は省略 -->
<style scoped>


#header-nav{
  position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 2;

}

.roof-nav-contents{
  display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    background: #fff;

    box-shadow: 0 0 3px #23afee;
}

.roof-nav-contents .icon-links {
    display: flex;
    margin-left: auto;

}

.roof-nav-contents .icon-links .icon-link-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 75px;
    margin-right:30px;
}

.serch-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 250px;
    margin:0 20px;
}

.st-Header_postButton {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    background-color: #3f9200;
    color: #fff;
    border-radius: 4px;
    font-size: 1.2rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


span.cp_btn {
	position: relative;
	display: block;
	width: 80px;
	padding:6px 10px;
	text-align: center;

	text-decoration: none;
	color: #FFF;
	text-shadow: 0 0 5px rgba(255, 255, 255, 0.0);
	background: #999;
	transition: .4s;
	border-radius: 4px;
}
span.cp_btn:hover {
	text-shadow: -6px 0px 15px rgba(255, 255, 240, 0.83), 6px 0px 15px rgba(255, 255, 240, 0.83);
	transition: .4s;
}



.text-links {
    display: flex;
}

.text-link-wrapper {
    display: flex;
    align-items: center;
    position: relative;

    padding: 15px 10px;
    font-size: 1.4rem;
    font-weight: bold;
}

.ferret-logo-area {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 30px;
}

</style>
