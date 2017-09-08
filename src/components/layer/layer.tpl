<div class="layer">
	<img src="${ require('../../assets/logo36x36.png') }">
	
<!-- <img src="../../assets/logo36x36.png"> -->
	<div>this is <%= name%> layer</div>
	<% for(let i = 0;i < arr.length; i ++) { %>
		<%= arr[i] %>
	<% }%>
</div>