
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Confirmation de commande</title>
</head>
<body style="font-family: Arial, sans-serif; background: #f8fafc; color: #222;">
	<h2>
		@if($type === 'confirmed')
			Confirmation de votre commande
		@else
			Commande annulée
		@endif
	</h2>
	<p>Bonjour {{ $order->user->name }},</p>
	@if($type === 'confirmed')
		<p>Votre commande n° {{ $order->order_number }} a été validée avec succès.</p>
	@else
		<p>Votre commande n° {{ $order->order_number }} a été annulée. Si vous avez des questions, contactez-nous.</p>
	@endif

	<h3>Détails de la commande :</h3>
	<ul>
		@foreach($order->items as $item)
			<li>{{ $item->product_name }} x {{ $item->quantity }} : {{ number_format($item->product_price, 2) }} €</li>
		@endforeach
	</ul>
	<p><strong>Total :</strong> {{ number_format($order->total_price, 2) }} €</p>
	<p>Merci pour votre confiance !</p>
</body>
</html>
