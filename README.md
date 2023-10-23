# Weather Widget

<h2>Summary</h2>
A Weather widget that displays the current weather for a selected city as well as providing forecasts for the next 12-15 hours.

<h2>Implementation</h2>
<p>The widget can be used on any page by importing the WeatherWidget component which is located in the components folder.</p>

```
import WeatherWidget from './components/dynamic/WeatherWidget';
```

This component accepts a single prop (JS object with details about the city). The schema for this object can be found below -

```
const obj = {
  city: 'London', // Required
  lat: '12341', // Required
  lon: '12341', // Required
  country: 'GB', // Optional
  state: 'ENG', // Optional
}
```

The search bar is an additional feature and works well with the widget. It's addition on the page with the widget is optional

```
import SearchBar from './components/dynamic/Searchbar';
```

<h2>Code Stack</h2>
The widget and the codebase in general uses a very simple stack to ensure a small filesize and an easy springboard for future development. The main packages of the stack can be found below -<br><br>
<ul>
  <li><strong>Vite - </strong>This creates the development server, complies all the files and provide HMR for real time editing and viewing</li>
  <li><strong>ReactJS - </strong>Vanilla library used</li>
  <li><strong>TailwindCSS - </strong>Styles the components</li>
</ul>


