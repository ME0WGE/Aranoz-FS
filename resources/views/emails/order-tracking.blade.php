<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Commande confirmée - Numéro de suivi</title>
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
        .tracking-info {
            background-color: #e8f5e8;
            border: 2px solid #4caf50;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin: 20px 0;
        }
        .tracking-number {
            font-size: 24px;
            font-weight: bold;
            color: #2e7d32;
            margin: 10px 0;
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
        <h1>Votre commande est confirmée !</h1>
        <p>Votre commande a été traitée et est en cours d'expédition.</p>
    </div>

    <div class="content">
        <h2>Bonjour {{ $order->user->first_name }} {{ $order->user->last_name }},</h2>
        
        <p>Excellente nouvelle ! Votre commande <strong>#{{ $order->order_number }}</strong> a été confirmée et est maintenant en cours d'expédition.</p>

        <div class="tracking-info">
            <h3>📦 Numéro de suivi</h3>
            <div class="tracking-number">{{ $order->order_number }}</div>
            <p>Utilisez ce numéro pour suivre votre colis sur notre site.</p>
        </div>

        <div class="order-details">
            <h3>Récapitulatif de votre commande :</h3>
            
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
        
        <p>Vous pouvez suivre l'état de votre commande à tout moment depuis votre espace client sur notre site.</p>
        
        <p>Merci de votre confiance et bonne réception !</p>
    </div>

    <div class="footer">
        <p>Cordialement,<br>L'équipe Aranoz</p>
        <p>Cet email a été envoyé automatiquement, merci de ne pas y répondre.</p>
    </div>
</body>
</html>
