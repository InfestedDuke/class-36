class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1');
        title.html('The car Game');
        title.position(130,10);
        var input=createInput('name');
        input.position(130,100);
        var button=createButton('Play');
        button.position(130,150);
        var greeting=createElement('h3');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html('Welcome'+name);
            greeting.position(130,200);
        })
    }
}