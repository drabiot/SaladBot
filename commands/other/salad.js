const { AttachmentBuilder, EmbedBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('salad')
		.setDescription('Create Salad'),
	async execute(interaction) {

		const file = new AttachmentBuilder('./assets/icon.jpg');
		const saladEmbed = new EmbedBuilder()
			.setColor(2067276)
			.setTitle('Salad Creation')
			.setAuthor({ name: 'Salad Bar', iconURL: 'attachment://icon.jpg' })
			.setDescription('Allows the creation of composed salads using multiple ingredients')
			.addFields(
				{ name: 'Choose between multiple ingredients:', value: '- Meats 🍖\n- Vegetables 🥒\n- Fruits 🍉\n- Cheeses 🧀' },
				{ name: '\u200B', value: '\u200B' },
			)
			.addFields({ name: 'Meats', value: '- Ham 🍖\n- Chicken 🍗\n- Egg 🥚\n- ...', inline: true })
			.addFields({ name: 'Vegetables', value: '- Tomatoes 🍅\n- Carrots 🥕\n- Cucumbers 🥒\n- Watermelon 🍉\n- ...', inline: true })
			.addFields({ name: 'Cheeses', value: '- Swiss Cheese 🧀\n- Cheddar 🟧\n- ...', inline: true })
			.setImage('attachment://icon.jpg')
			.setTimestamp()
			.setFooter({ text: 'Enjoy your Salad 😊', iconURL: 'attachment://icon.jpg' });

		await interaction.reply('Your salad creation is below par!');

		await interaction.channel.send({ embeds : [saladEmbed], files : [file] });
	},
};
