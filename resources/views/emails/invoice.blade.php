<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Facture Commande #{{ $order->id }}</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f9f9f9; color: #222; }
        .container { max-width: 480px; margin: 32px auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #eee; padding: 24px; }
        h2 { color: #e91e63; margin-bottom: 16px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
        th, td { padding: 8px; border-bottom: 1px solid #eee; text-align: left; }
        th { background: #f3f3f3; }
        .total { font-weight: bold; color: #e91e63; }
        .footer { font-size: 13px; color: #888; margin-top: 24px; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Facture - Commande #{{ $order->id }}</h2>
        <div><strong>Date :</strong> {{ $order->created_at->format('d/m/Y') }}</div>
        <div><strong>Client :</strong> {{ $order->user->name }} ({{ $order->user->email }})</div>
        <table>
            <thead>
                <tr>
                    <th>Produit</th>
                    <th>Quantité</th>
                    <th>Prix unitaire</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                @foreach($order->items as $item)
                <tr>
                    <td>{{ $item->product_name ?? $item->product->name ?? 'Produit' }}</td>
                    <td>{{ $item->quantity }}</td>
                    <td>{{ number_format($item->product_price, 2, ',', ' ') }} €</td>
                    <td>{{ number_format($item->product_price * $item->quantity, 2, ',', ' ') }} €</td>
                </tr>
                @endforeach
            </tbody>
        </table>
        <div class="total">Total : {{ number_format($order->total_price, 2, ',', ' ') }} €</div>
        <div class="footer">Merci pour votre commande !<br>Aranoz</div>
    </div>
</body>
</html>
