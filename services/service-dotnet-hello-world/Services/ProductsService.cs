using DockerComposeProductApi.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DockerComposeProductApi.Services
{
    public class ProductsService : IProductsService
    {
        public ICollection<Product> GetAll()
        {
            return new List<Product>()
            {
                new Product(){ Name="Hello World from Dotnet!", Price = 1299.90}
            };
        }
    }
}
