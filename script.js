* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
}

.container {
    width: 90%;
    max-width: 1100px;
    margin: auto;
}

header {
    background: #2e7d32;
    color: white;
    padding: 15px 0;
    position: sticky;
    top: 0;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header span {
    color: #a5d6a7;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.hero {
    background: linear-gradient(rgba(0,0,0,.5),
    rgba(0,0,0,.5)),
    url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200");
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 120px 20px;
}

.hero h2 {
    font-size: 2.8rem;
    margin-bottom: 15px;
}

.section {
    padding: 80px 20px;
}

.section h2 {
    text-align: center;
    margin-bottom: 40px;
    color: #2e7d32;
}

.cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    flex: 1;
    min-width: 250px;
    background: #f5f5f5;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
}

.simulador {
    background: #f0f8f0;
}

form {
    max-width: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
    margin-bottom: 5px;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

button {
    margin-top: 20px;
    padding: 12px;
    border: none;
    background: #2e7d32;
    color: white;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background: #1b5e20;
}

#resultado {
    margin-top: 25px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}

footer {
    background: #2e7d32;
    color: white;
    text-align: center;
    padding: 20px;
}
