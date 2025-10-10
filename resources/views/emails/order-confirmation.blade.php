<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Confirmation de commande</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #EAF6FA;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .header h1 {
            color: #333;
            margin: 0;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .order-details {
            background-color: white;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .product-item {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }
        .product-item:last-child {
            border-bottom: none;
        }
        .total {
            font-weight: bold;
            font-size: 18px;
            color: #e91e63;
            margin-top: 15px;
        }
        .footer {
            text-align: center;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Merci pour votre commande !</h1>
        <p>Votre commande a été reçue et est en cours de traitement.</p>
    </div>

    <div class="content">
        <h2>Bonjour {{ $order->user->first_name }} {{ $order->user->last_name }},</h2>
        
        <p>Nous vous confirmons la réception de votre commande <strong>#{{ $order->order_number }}</strong> du {{ $order->created_at->format('d/m/Y à H:i') }}.</p>

        <div class="order-details">
            <h3>Détails de votre commande :</h3>
            
            @foreach($order->items as $item)
            <div class="product-item">
                <div>
                    <strong>{{ $item->product_name }}</strong><br>
                    Quantité: {{ $item->quantity }}
                </div>
                <div>
                    €{{ number_format($item->product_price / 100, 2) }}
                </div>
            </div>
            @endforeach
            
            <div class="total">
                Total: €{{ number_format($order->total_price / 100, 2) }}
            </div>
        </div>

        <p><strong>Statut de la commande :</strong> {{ ucfirst($order->status) }}</p>
        
        <p>Nous traiterons votre commande dans les plus brefs délais et vous tiendrons informé de son avancement.</p>
    </div>

    <div class="footer">
        <p>Cordialement,<br>L'équipe Aranoz</p>
        <p>Cet email a été envoyé automatiquement, merci de ne pas y répondre.</p>
    </div>
</body>
</html>
