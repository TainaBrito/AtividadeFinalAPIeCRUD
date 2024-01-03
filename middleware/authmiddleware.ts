import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { FuncionarioRepositoryImplementation } from '../modules/funcionario/repositories/implementations/funcionario.implrepository';

export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const funcionarioRepo = new FuncionarioRepositoryImplementation();

  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).send({ error: 'Token error' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token malformatted' });
  }

  jwt.verify(token, 'pgZkdPLNzm3uSgFmjgfz$x;EuM;uCP', async (err: any, decoded: JwtPayload | undefined) => {
    if (err) {
      return res.status(401).send({ error: 'Token invalid' });
    }

    if (!decoded || !decoded.id) {
      return res.status(401).send({ error: 'Invalid token payload' });
    }

    const funcionario = await funcionarioRepo.getFuncionario(decoded.id);

    if (!funcionario) {
      return res.status(401).send({ error: 'Invalid user' });
    }

    req.userId = decoded.id;

    return next();
  });
};
