using System.Linq.Expressions;
using LinqKit;

namespace SFAS.Common.Extensions
{
    public static class LinqExtensions
    {
        public static IQueryable<T> WhereAny<T>(this IQueryable<T> q, params Expression<Func<T, bool>>[] predicates)
        {
            var orPredicate = PredicateBuilder.New<T>();
            foreach (var predicate in predicates)
            {
                orPredicate = orPredicate.Or(predicate);
            }
            return q.AsExpandable().Where(orPredicate);
        }

        public static IQueryable<T> WhereAll<T>(this IQueryable<T> q, params Expression<Func<T, bool>>[] predicates)
        {
            var andPredicate = PredicateBuilder.New<T>();
            foreach (var predicate in predicates)
            {
                andPredicate = andPredicate.And(predicate);
            }
            return q.AsExpandable().Where(andPredicate);
        }
    }
}
