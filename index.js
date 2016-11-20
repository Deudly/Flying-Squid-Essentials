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