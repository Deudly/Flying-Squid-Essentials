var prefix = "[Essentials] ";
console.log(prefix + "Plugin enabled");
module.exports.player = (player, serv) => {
    player.commands.add(
	{
		base: 'ping',
		aliases: ['ping'],
        info: 'Ping? Pong',
        op: true,
        action(args) {
            player.chat(prefix + "Pong!");
		}}	
	);
    player.commands.add(
	{
		base: 'break',
        info: 'Breaks the block you are on',
        op: true,
        action(args) {
            //Material is wrong, what is the Material of AIR?
            serv.setBlock(serv.overworld, player.position/32, "AIR", "AIR");
            player.chat(prefix + "Magic! That block has been deleted");
		}}	
	);
    player.commands.add({
        base: 'afk',
        info: 'Are you afk? Type it',
		usage: '/afk',
        op: true,
        action(args) {
           serv.broadcast(prefix + player.username + " is AFK!");
    }});
    player.commands.add({
        base: 'suicide',
        info: 'Commit a suicide',
		usage: '/suicide',
        op: true,
        action(args) {
           serv.broadcast(prefix + player.username + " suicided! Bye bad world");
           player.updateHealth(0);
    }});
	player.commands.add({
        base: 'nick',
		aliases: ['nick'],
        info: 'Changes your nickname',
		usage: '/nick [TheNickYouWant]',
        op: true,
        action(args) {
            if(args.length >= 1) {
                player.username = args;
                player.chat("You name changed sucessfully!");
            }}
    });
    player.commands.add({
        base: 'heal',
		aliases: ['heal'],
        info: 'Heal you or another player',
		usage: '/heal',
        op: true,
        action(args) {
            if (args.length === 0){
                player.updateHealth(20);
                player.chat(prefix + "You healed yourself!");
            }/*else{
                serv.getPlayer(args).updateHealth(20);
                player.chat(prefix + "You healed " + args + "!");
                serv.getPlayer(args).chat(prefix + "You have been healed!");
            }*/}
    });
	player.commands.add({
		
        base: 'msg',
		aliases: ['m'],
        info: 'Message a player',
		usage: '/teleport [target player] <destination player or x> [y] [z]',
        op: true,
		parse(str) {
			return str.match(/^(((.* )?~?-?\d* ~?-?\d* ~?-?\d*)|(.+ .+))$/) ? str.split(' ') : false;
		},
        action(args) {
            if(args.length >= 1) {
                var now = 0;
                var todos = args.length;
                var msg = "";
                while (now <= todos){
                    if (now != 0){
                        msg = msg + args[now];
                    }
                }
                serv.getPlayer(args[0]).chat(msg);
            }}
    }
	
	
	);
};