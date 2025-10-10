<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bienvenue à la newsletter</title>
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
            padding: 30px 20px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .header h1 {
            color: #333;
            margin: 0 0 10px 0;
            font-size: 28px;
        }
        .header p {
            color: #666;
            margin: 0;
            font-size: 16px;
        }
        .content {
            background-color: #f9f9f9;
            padding: 30px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .content h2 {
            color: #333;
            margin-top: 0;
            font-size: 22px;
        }
        .content p {
            margin: 15px 0;
            color: #666;
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
        }
        .benefit-icon {
            color: #FF3368;
            font-size: 20px;
            margin-right: 10px;
            min-width: 25px;
        }
        .cta-button {
            display: inline-block;
            background-color: #FF3368;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            color: #666;
            font-size: 14px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎉 Bienvenue chez Aranoz !</h1>
        <p>Merci de vous être inscrit à notre newsletter</p>
    </div>

    <div class="content">
        <h2>Bonjour,</h2>
        
        <p>Nous sommes ravis de vous compter parmi nos abonnés !</p>
        
        <p>Vous recevrez désormais nos actualités, offres exclusives et nouveautés directement dans votre boîte mail.</p>

        <div class="benefits">
            <h3 style="color: #333; margin-top: 0;">Ce que vous allez recevoir :</h3>
            
            <div class="benefit-item">
                <span class="benefit-icon">✨</span>
                <div>
                    <strong>Offres exclusives</strong><br>
                    Profitez en avant-première de nos promotions et réductions
                </div>
            </div>
            
            <div class="benefit-item">
                <span class="benefit-icon">🆕</span>
                <div>
                    <strong>Nouveautés</strong><br>
                    Découvrez nos nouveaux produits avant tout le monde
                </div>
            </div>
            
            <div class="benefit-item">
                <span class="benefit-icon">💡</span>
                <div>
                    <strong>Conseils & Astuces</strong><br>
                    Recevez nos meilleurs conseils pour bien choisir vos meubles
                </div>
            </div>
        </div>

        <p style="text-align: center;">
            <a href="{{ url('/products') }}" class="cta-button">
                Découvrir nos produits
            </a>
        </p>

        <p>À très bientôt !</p>
    </div>

    <div class="footer">
        <p>L'équipe Aranoz</p>
        <p style="font-size: 12px; color: #999; margin-top: 15px;">
            Vous recevez cet email car vous vous êtes inscrit à notre newsletter avec l'adresse {{ $email }}
        </p>
    </div>
</body>
</html>

