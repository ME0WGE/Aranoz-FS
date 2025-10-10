<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Code promo à venir</title>
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
            background: linear-gradient(135deg, #FF3368 0%, #ff1f5a 100%);
            padding: 40px 20px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: white;
            margin: 0 0 10px 0;
            font-size: 32px;
        }
        .header p {
            color: rgba(255, 255, 255, 0.9);
            margin: 0;
            font-size: 18px;
        }
        .content {
            background-color: #f9f9f9;
            padding: 30px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .content h2 {
            color: #333;
            margin-top: 0;
            font-size: 24px;
        }
        .content p {
            margin: 15px 0;
            color: #666;
            font-size: 16px;
        }
        .promo-box {
            background: linear-gradient(135deg, #EAF6FA 0%, #d4e9f7 100%);
            border: 2px dashed #FF3368;
            padding: 25px;
            border-radius: 8px;
            text-align: center;
            margin: 25px 0;
        }
        .promo-box h3 {
            color: #FF3368;
            font-size: 28px;
            margin: 0 0 10px 0;
        }
        .promo-box p {
            color: #333;
            margin: 0;
            font-size: 14px;
        }
        .benefits {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .benefit-item {
            display: flex;
            align-items: start;
            margin: 15px 0;
            padding: 10px;
        }
        .benefit-icon {
            color: #FF3368;
            font-size: 24px;
            margin-right: 15px;
            min-width: 30px;
        }
        .footer {
            text-align: center;
            color: #666;
            font-size: 14px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
        }
        .cta-button {
            display: inline-block;
            background-color: #FF3368;
            color: white;
            padding: 15px 40px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
            font-weight: bold;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎉 Félicitations !</h1>
        <p>Votre demande a été enregistrée</p>
    </div>

    <div class="content">
        <h2>Bonjour {{ $user->name }},</h2>
        
        <p>Merci d'avoir montré votre intérêt pour notre vente hebdomadaire !</p>
        
        <div class="promo-box">
            <h3>Code Promo à Venir</h3>
            <p>Nous préparons une offre exclusive spécialement pour vous</p>
        </div>

        <p>Vous recevrez très prochainement par email un <strong>code promo exclusif</strong> qui vous permettra de profiter de réductions exceptionnelles sur notre sélection de produits.</p>

        <div class="benefits">
            <h3 style="color: #333; margin-top: 0;">Ce qui vous attend :</h3>
            
            <div class="benefit-item">
                <span class="benefit-icon">🎁</span>
                <div>
                    <strong>Réductions exclusives</strong><br>
                    Des offres spéciales réservées à nos clients privilégiés
                </div>
            </div>
            
            <div class="benefit-item">
                <span class="benefit-icon">⏰</span>
                <div>
                    <strong>Offre limitée dans le temps</strong><br>
                    Profitez-en avant la fin de notre vente hebdomadaire
                </div>
            </div>
            
            <div class="benefit-item">
                <span class="benefit-icon">📦</span>
                <div>
                    <strong>Livraison gratuite possible</strong><br>
                    Selon les conditions de votre code promo
                </div>
            </div>
        </div>

        <p style="text-align: center;">
            <a href="{{ url('/products') }}" class="cta-button">
                Découvrir nos produits
            </a>
        </p>

        <p>En attendant, n'hésitez pas à parcourir notre catalogue pour repérer les produits qui vous intéressent !</p>
        
        <p style="margin-top: 30px;">À très bientôt,<br><strong>L'équipe Aranoz</strong></p>
    </div>

    <div class="footer">
        <p>Vous recevez cet email car vous avez demandé un code promo sur Aranoz</p>
        <p style="font-size: 12px; color: #999; margin-top: 15px;">
            © {{ date('Y') }} Aranoz - Tous droits réservés
        </p>
    </div>
</body>
</html>

