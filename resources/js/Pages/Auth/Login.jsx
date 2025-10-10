import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = e => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Connexion" />
            
            <div className="min-h-screen bg-gradient-to-br from-[#EAF6FA] to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <Link href="/" className="inline-block">
                            <h1 className="text-4xl font-bold text-[#FF3368]">Aranoz</h1>
                        </Link>
                        <p className="mt-2 text-gray-600">Connectez-vous à votre compte</p>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-lg shadow-xl p-8">
                        {status && (
                            <div className="mb-4 text-sm font-medium text-green-600 bg-green-50 p-3 rounded">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3368] focus:border-transparent transition"
                                    autoComplete="username"
                                    autoFocus
                                    onChange={e => setData('email', e.target.value)}
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mot de passe
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF3368] focus:border-transparent transition"
                                    autoComplete="current-password"
                                    onChange={e => setData('password', e.target.value)}
                                    required
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            {/* Remember me */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={data.remember}
                                        onChange={e => setData('remember', e.target.checked)}
                                        className="h-4 w-4 text-[#FF3368] focus:ring-[#FF3368] border-gray-300 rounded"
                                    />
                                    <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
                                </label>

                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="text-sm text-[#FF3368] hover:text-[#ff1f5a] transition"
                                    >
                                        Mot de passe oublié?
                                    </Link>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-[#FF3368] text-white py-3 px-4 rounded-lg hover:bg-[#ff1f5a] transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? 'Connexion...' : 'Se connecter'}
                            </button>
                        </form>

                        {/* Register Link */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Vous n'avez pas de compte?{' '}
                                <Link
                                    href={route('register')}
                                    className="text-[#FF3368] hover:text-[#ff1f5a] font-medium transition"
                                >
                                    Créer un compte
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-6 text-center">
                        <Link
                            href="/"
                            className="text-sm text-gray-600 hover:text-gray-900 transition"
                        >
                            ← Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
