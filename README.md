# SHRED-IT SECURITY COMPANY
Shipping Website (Azure Static Web App + Azure Functions + Cosmos DB)

## Structure
- frontend/  → static HTML/CSS/JS
- api/       → Azure Functions
- cosmosDB   → serverless database

## Deployment
1. Create GitHub repo
2. Push code
3. Go to Azure → Create Static Web App
4. Connect GitHub repo
5. Set:
   - App folder: `/frontend`
   - API folder: `/api`
6. Add Cosmos DB keys in Configuration:
   - COSMOS_URI
   - COSMOS_KEY
