fetch('https://api.mozambiquehe.re/bridge?version=5&platform=PC&player=thefiredguy&auth=ZKSthf3n4D2mGZPecfsF')
    .then(res => res.json())
    .then(data => console.log(data))