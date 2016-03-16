var my_news = [
	{
		author: 'Александр', 
		text: 'Здесь текст Александра'
	},
	{
		author: 'Николай', 
		text: 'Здесь текст Николая'
	},
	{
		author: 'Павел', 
		text: 'Здесь текст Павла'
	}, 
 

];


var App = React.createClass({
	render: function() {
		return(
				<div className="app">
					Это компонент App
					<News latest_news={my_news} />
					<Comments />
				</div> 
			);
	}
});

var News = React.createClass({
	render: function() {
		var data = this.props.data;
		var newsTemplate = data.map(function(item, index) {
			return (
				<div key={index}>
					<p className="news__author">{item.author}:</p>
					<p className="news__text">{item.text}</p>
				</div>
			)
		})

		return(
			<div className="news">
				{newsTemplate}
			</div>
		);

	}
});

var Comments = React.createClass({
	render: function() {
		return(
				<div className="comments">
					Это компонент Comments
				</div> 
			);
	}
});

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);